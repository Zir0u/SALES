using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using AMS3ASales.API.Context;
using AMS3ASales.API.Domain;


namespace AMS3ASales.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CategoriesController : ControllerBase
    {
        private readonly ApplicationDataContext _context;
        public CategoriesController(ApplicationDataContext context)
        {
            _context = context;
        }
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_context.Category.ToList());
        }
        [HttpGet("{id}")]
        public ActionResult<Category> GetById(Guid id) 
        {
            var category = _context.Category.FirstOrDefault(x => x.Id == id);

            if (category == null)
            {
                return NotFound();
            }

            return Ok(category);
        }
        
        [HttpPost]
        public ActionResult Post(CategoryRequest categoryRequest) 
        { 
            var category = new Category(){
                Description = categoryRequest.Description,
                IsActive = true,
                ImageURL = categoryRequest.ImageURL
            };
            _context.Category.Add(category);
            _context.SaveChanges();
            
            return Ok();
        }
        [HttpPut]
        public ActionResult Update(Guid id, Category categoryRequest)
        {
            var category = _context.Category.Find(id);
            if (category == null) return NotFound();
            category.Description = categoryRequest.Description;
            category.ImageURL = categoryRequest.ImageURL;
            _context.SaveChanges();
            return Ok();
        }
        [HttpDelete]
        [Route("{id:guid}")]
        public ActionResult Delete(Guid id){
            var category = _context.Category.Find(id);
            if (category == null) return NotFound();
            _context.Remove(category);
            _context.SaveChanges();
            return Ok();
                }
    }   
}