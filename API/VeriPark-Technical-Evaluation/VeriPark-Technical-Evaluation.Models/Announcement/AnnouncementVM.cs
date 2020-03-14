using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;
using VeriPark_Technical_Evaluation.Enums;

namespace VeriPark_Technical_Evaluation.Models.Announcement
{
    public class AnnouncementVM
    {
        [Required, MaxLength(25), DataType(DataType.Text)]
        public string Title { get; set; }

        [Required, MaxLength(125), DataType(DataType.MultilineText)]
        public string Description { get; set; }
        
        [Required, DataType(DataType.Date)]
        public DateTime Date { get; set; }
        
        [Required]
        public AnnouncementTypeEnum AnnouncementType { get; set; }
    }
}
