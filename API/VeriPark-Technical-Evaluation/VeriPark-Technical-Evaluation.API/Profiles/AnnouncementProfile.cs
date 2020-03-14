using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using VeriPark_Technical_Evaluation.Entity.Entity;
using VeriPark_Technical_Evaluation.Models;
using VeriPark_Technical_Evaluation.Models.Announcement;

namespace VeriPark_Technical_Evaluation.API.Profiles
{
    public class AnnouncementProfile : Profile
    {
        public AnnouncementProfile()
        {
            this.CreateMap<AnnouncementVM, Announcement>().ReverseMap();
        }
    }
}
