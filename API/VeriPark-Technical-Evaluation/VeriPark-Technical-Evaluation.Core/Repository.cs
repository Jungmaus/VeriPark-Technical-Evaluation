using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using VeriPark_Technical_Evaluation.Entity.Context;
using VeriPark_Technical_Evaluation.Entity.Entity;

namespace VeriPark_Technical_Evaluation.Core
{
    public class Repository<T> : IRepository<T> where T : BaseEntity, new()
    {
        private readonly MsSQLContext _context;
        public Repository(MsSQLContext context)
        {
            _context = context;
        }
        public void Add(T entity)
        {
            _context.Set<T>().Add(entity);
            SaveChanges();
        }

        public void Delete(T entity)
        {
            T existing = _context.Set<T>().FirstOrDefault(x => x.ID == entity.ID);
            if (existing != null)
            {
                _context.Set<T>().Remove(existing);
                SaveChanges();
            }
        }

        public IEnumerable<T> Get()
        {
            return _context.Set<T>();
        }

        public IEnumerable<T> Get(System.Linq.Expressions.Expression<Func<T, bool>> predicate)
        {
            return _context.Set<T>().Where(predicate);
        }

        public void Update(T entity)
        {
            _context.Entry(entity).State = EntityState.Modified;
            _context.Set<T>().Attach(entity);
            SaveChanges();
        }

        private void SaveChanges()
        {
            _context.SaveChanges();
        }
    }
}
