using Dapper;
using EndangeredSpeciesFunctions.Models.DTO;
using Microsoft.Extensions.Configuration;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;

namespace EndangeredSpeciesFunctions.DataAccess
{
    public class SpeciesNamesConnection : ISpeciesNamesConnection
    {
        private const string query = @"SELECT s.FullSpeciesName FROM Species s";

        private readonly IConfiguration configuration;

        public SpeciesNamesConnection(IConfiguration configuration)
        {
            this.configuration = configuration;
        }

        public List<SpeciesNameResponse> GetAllSpeciesNames()
        {
            using (var connection = new SqlConnection(configuration.GetConnectionString("Prod")))
            {
                List<SpeciesNameResponse> names = connection.Query<SpeciesNameResponse>(query).ToList();
                return names;
            }
        }
    }
}
