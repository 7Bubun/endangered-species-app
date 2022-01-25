using System.Collections.Generic;

namespace EndangeredSpeciesFunctions.Models
{
    public class Species
    {
        public string SpeciesTag { get; set; }
        public string FullSpeciesName { get; set; }
        public string Category { get; set; }
        public List<SpeciesDetails> Details { get; set; }
        public List<SpeciesLinks> Links { get; set; }
    }
}
