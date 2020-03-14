using System;
using System.Collections.Generic;
using System.Text;
using VeriPark_Technical_Evaluation.Enums;

namespace VeriPark_Technical_Evaluation.Entity.Entity
{
    public class Announcement : BaseEntity
    {
        public string Title { get; set; }
        public string Description { get; set; }
        public DateTime Date { get; set; }
        public AnnouncementTypeEnum AnnouncementType { get; set; }
    }
}
