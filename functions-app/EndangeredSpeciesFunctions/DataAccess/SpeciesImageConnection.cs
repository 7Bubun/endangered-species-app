using Azure.Storage.Blobs;
using Azure.Storage.Blobs.Models;
using Dapper;
using EndangeredSpeciesFunctions.Models;
using EndangeredSpeciesFunctions.Models.DTO;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data.Common;
using System.Data.SqlClient;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EndangeredSpeciesFunctions.DataAccess
{
    public class SpeciesImageConnection : ISpeciesImageConnection
    {
        private const string speciesQuery =
                @"SELECT *
                FROM Species s INNER JOIN SpeciesDetails sd ON s.SpeciesTag = sd.SpeciesTag
                INNER JOIN SpeciesLinks sl ON s.SpeciesTag = sl.SpeciesTag
                WHERE s.FullSpeciesName = @Name";

        private readonly IConfiguration configuration;
        private readonly BlobContainerClient client;

        public SpeciesImageConnection(IConfiguration configuration)
        {
            this.configuration = configuration;
            client = new BlobContainerClient
                (configuration.GetConnectionString("ImageProd"), "endangered-species-blob");
        }

        public SpeciesWithImage FindSpeciesWithImage(ImageRequest request)
        {
            SpeciesImages image = new SpeciesImages();
            Species foundSpecies;
            string imageName = request.Name.ToLower().Replace(" ","") + ".jpg";

            BlobClient blobClient = client.GetBlobClient(imageName);
            if (blobClient.Exists())
            {
                var download = blobClient.DownloadContent();
                image.FullSpeciesName = request.Name;
                image.Image = download.Value.Content.ToArray();
            }
            using (var connection = new SqlConnection(configuration.GetConnectionString("Prod")))
            {
                foundSpecies = GetSpecies(connection, request.Name);
            }

            return StaticSpeciesMapper.SpeciesWithImageDTO(foundSpecies, image);
        }

        private Species GetSpecies(DbConnection connection, string speciesFullName)
        {
            Species foundSpecies = new Species();

            Dictionary<int, SpeciesDetails> details = new Dictionary<int, SpeciesDetails>();
            Dictionary<int, SpeciesLinks> links = new Dictionary<int, SpeciesLinks>();

            var sp = connection.Query<Species, SpeciesDetails, SpeciesLinks, Species>(
            speciesQuery,
            (species, speciesDetails, speciesLinks) =>
            {
                foundSpecies.SpeciesTag = species.SpeciesTag;
                foundSpecies.FullSpeciesName = species.FullSpeciesName;
                foundSpecies.Category = species.Category;

                if (!details.ContainsKey(speciesDetails.Id))
                {
                    details.Add(speciesDetails.Id, speciesDetails);
                }
                if (!links.ContainsKey(speciesLinks.Id))
                {
                    links.Add(speciesLinks.Id, speciesLinks);
                }
                return species;
            },
            new { Name = speciesFullName },
            splitOn: "Id");

            foundSpecies.Details = details.Select(val => val.Value).ToList();
            foundSpecies.Links = links.Select(val => val.Value).ToList();

            return foundSpecies;
        }
    }
}
