using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EndangeredSpeciesFunctions.Models.DTO
{
    public class SpeciesWithImage
    {
        public string FullName { get; set; }
        public string Category { get; set; }
        public List<DetailsDTO> Details { get; set; }
        public List<LinksDTO> Links { get; set; }
        public string Image { get; set; }
    }
}
