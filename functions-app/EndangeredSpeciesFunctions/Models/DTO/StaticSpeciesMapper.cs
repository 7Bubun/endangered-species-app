using System;
using System.Collections.Generic;
using System.Linq;

namespace EndangeredSpeciesFunctions.Models.DTO
{
    public class StaticSpeciesMapper
    {
        public static SpeciesDTO SpeciesToDTO(Species sp)
        {
            return new SpeciesDTO()
            {
                Tag = sp.SpeciesTag,
                Category = sp.Category,
                FullName = sp.FullSpeciesName,
                Links = LinksToDTO(sp.Links)
            };
        }

        public static SpeciesWithImage SpeciesWithImageDTO(Species sp, SpeciesImages image)
        {
            return new SpeciesWithImage()
            {
                FullName = sp.FullSpeciesName,
                Category = sp.Category,
                Details = DetailsToDTO(sp.Details),
                Links = LinksToDTO(sp.Links),
                Image = Convert.ToBase64String(image.Image)
            };
        }

        private static List<DetailsDTO> DetailsToDTO(List<SpeciesDetails> details)
        {
            return details.Select(d => new DetailsDTO()
            {
                Id = d.Id,
                Information = d.Information
            }).ToList();
        }

        private static List<LinksDTO> LinksToDTO(List<SpeciesLinks> links)
        {
            return links.Select(l => new LinksDTO()
            {
                Id = l.Id,
                Link = l.Link
            }).ToList();
        }
    }
}
