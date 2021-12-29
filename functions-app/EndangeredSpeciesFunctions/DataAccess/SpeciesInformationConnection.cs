using EndangeredSpeciesFunctions.Models;
using System.Collections.Generic;
using Dapper;
using Microsoft.Extensions.Configuration;
using Microsoft.Data.Sqlite;
using System;
using System.Linq;

namespace EndangeredSpeciesFunctions.DataAccess
{
    //TODO dodanie Id do detali i linków i robienie distinct
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

        public List<Species> FindSpeciesWithInformation(params string[] speciesTags)
        {
            List<Species> speciesList = new List<Species>();

            using (var connection = new SqliteConnection(configuration.GetConnectionString("Dev")))
            {

                foreach (string speciesTag in speciesTags)
                {
                    Species foundSpecies = new Species();
                    foundSpecies.Details = new List<SpeciesDetails>();
                    foundSpecies.Links = new List<SpeciesLinks>();

                    var sp = connection.Query<Species, SpeciesDetails, SpeciesLinks, Species>(
                    query,
                    (species, speciesDetails, speciesLinks) =>
                    {
                        foundSpecies.SpeciesTag = species.SpeciesTag;
                        foundSpecies.FullSpeciesName = species.FullSpeciesName;
                        foundSpecies.Category = species.Category;

                        if(!foundSpecies.Details.Contains(speciesDetails))
                        {
                            foundSpecies.Details.Add(speciesDetails);
                        }
                        if(!foundSpecies.Links.Contains(speciesLinks))
                        {
                            foundSpecies.Links.Add(speciesLinks);
                        }
                        return species;
                    },
                    new { SpeciesTag = speciesTag },
                    splitOn: "SpeciesTag");

                    Console.WriteLine(foundSpecies.FullSpeciesName + foundSpecies.Details.Count);
                }
            }
            return null;
        }
    }
}
