using EndangeredSpeciesFunctions.Models;
using System.Collections.Generic;

namespace EndangeredSpeciesFunctions.DataAccess
{
    public interface ISpeciesInformationConnection
    {
        public Species FindSpeciesWithInformation(TagRequest speciesTag);
    }
}
