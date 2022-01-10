using System.Collections.Generic;

namespace EndangeredSpeciesFunctions.Models.DTO
{
    public class SpeciesDTO
    {
        public string Tag { get; set; }
        public string FullName { get; set; }
        public string Category { get; set; }
        public List<LinksDTO> Links { get; set; }
    }
}
