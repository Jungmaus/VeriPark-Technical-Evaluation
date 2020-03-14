using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Text;
using VeriPark_Technical_Evaluation.Core;
using VeriPark_Technical_Evaluation.DAL.Abstract;
using VeriPark_Technical_Evaluation.Entity.Entity;

namespace VeriPark_Technical_Evaluation.DAL.Concrate
{
    public class AnnouncementService : IAnnouncementService
    {
        private readonly IRepository<Announcement> _repo;

        public AnnouncementService(IRepository<Announcement> repo)
        {
            _repo = repo;
        }

        public void Add(Announcement entity) => this._repo.Add(entity);

        public void Delete(Announcement entity) => this._repo.Delete(entity);

        public IEnumerable<Announcement> Get() => this._repo.Get();

        public IEnumerable<Announcement> Get(Expression<Func<Announcement, bool>> predicate) => this._repo.Get(predicate);

        public void Update(Announcement entity) => this._repo.Update(entity);
    }
}
