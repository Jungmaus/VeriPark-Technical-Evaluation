using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using VeriPark_Technical_Evaluation.DAL.Abstract;
using VeriPark_Technical_Evaluation.Entity.Entity;
using VeriPark_Technical_Evaluation.Models;
using VeriPark_Technical_Evaluation.Models.Announcement;

namespace VeriPark_Technical_Evaluation.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AnnouncementController : ControllerBase
    {
        private readonly IAnnouncementService _announcementService;
        private readonly IMapper _mapper;

        public AnnouncementController(IAnnouncementService announcementService, IMapper mapper)
        {
            this._announcementService = announcementService;
            this._mapper = mapper;
        }

        // GET: api/Announcement
        [HttpGet]
        public List<AnnouncementVM> Get()
        {
            var announcementList = _announcementService.Get().ToList();
            var result = _mapper.Map<List<AnnouncementVM>>(announcementList);
            return result;
        }

        // POST: api/Announcement
        [HttpPost]
        public AnnouncementAddResult Post([FromBody] AnnouncementVM model)
        {
            AnnouncementAddResult result = new AnnouncementAddResult();
            if (ModelState.IsValid)
            {
                try
                {
                    Announcement entity = _mapper.Map<Announcement>(model);
                    _announcementService.Add(entity);
                    result.IsSuccess = true;
                }
                catch (Exception ex)
                {
                    result.IsSuccess = false;
                    result.ErrorMessage = ex.ToString();
                }
            }
            else
            {
                result.IsSuccess = false;
                result.ErrorMessage = "Invalid input.";
            }
            return result;
        }

    }
}
