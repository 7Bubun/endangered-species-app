using EndangeredSpeciesFunctions.Models;
using EndangeredSpeciesFunctions.Models.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EndangeredSpeciesFunctions.DataAccess
{
    public interface ISpeciesImageConnection
    {
        public SpeciesWithImage FindSpeciesWithImage(ImageRequest request);
    }
}
