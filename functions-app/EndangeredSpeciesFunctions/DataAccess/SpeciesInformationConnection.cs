using EndangeredSpeciesFunctions.Models;
using System.Collections.Generic;
using Dapper;
using Microsoft.Extensions.Configuration;
using Microsoft.Data.Sqlite;
using System;
using System.Linq;
using System.Data.Common;

namespace EndangeredSpeciesFunctions.DataAccess
{
    public class SpeciesInformationConnection : ISpeciesInformationConnection
    {
        private const string query =
                @"SELECT *
                FROM Species s INNER JOIN SpeciesDetails sd ON s.SpeciesTag = sd.SpeciesTag
                INNER JOIN SpeciesLinks sl ON s.SpeciesTag = sl.SpeciesTag
                WHERE s.SpeciesTag = @SpeciesTag";

        private readonly IConfiguration configuration;

        public SpeciesInformationConnection(IConfiguration configuration)
        {
            this.configuration = configuration;
        }

        public Species FindSpeciesWithInformation(TagRequest speciesTag)
        {
            using (var connection = new SqliteConnection(configuration.GetConnectionString("Dev")))
            {
                Species foundSpecies = GetSpecies(connection, speciesTag.Tag);
                return foundSpecies;
            }
        }

        private Species GetSpecies(DbConnection connection, string speciesTag)
        {
            Species foundSpecies = new Species();

            Dictionary<int, SpeciesDetails> details = new Dictionary<int, SpeciesDetails>();
            Dictionary<int, SpeciesLinks> links = new Dictionary<int, SpeciesLinks>();

            var sp = connection.Query<Species, SpeciesDetails, SpeciesLinks, Species>(
            query,
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
            new { SpeciesTag = speciesTag },
            splitOn: "Id");

            foundSpecies.Links = links.Select(val => val.Value).ToList();

            return foundSpecies;
        }
    }
}
