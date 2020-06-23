using System;

namespace TranslationApp.API.Dtos
{
    public class PhotosForDetailedDto
    {
        public int Id { get; set; }
        public string Url { get; set; }
        public string Description { get; set; }
        public int Age { get; set; }
        public DateTime DateAdded { get; set; }
         public bool IsMain { get; set; }

    }
}