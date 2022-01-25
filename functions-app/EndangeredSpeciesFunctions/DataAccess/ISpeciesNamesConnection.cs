using EndangeredSpeciesFunctions.Models.DTO;
using System.Collections.Generic;

namespace EndangeredSpeciesFunctions.DataAccess
{
    public interface ISpeciesNamesConnection
    {
        public List<SpeciesNameResponse> GetAllSpeciesNames();
    }
}
