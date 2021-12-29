using EndangeredSpeciesFunctions.Models;
using System.Collections.Generic;

namespace EndangeredSpeciesFunctions.DataAccess
{
    public interface ISpeciesInformationConnection
    {
        public List<Species> FindSpeciesWithInformation(params string[] speciesTags);
    }
}
