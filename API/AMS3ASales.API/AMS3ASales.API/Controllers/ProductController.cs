using AMS3ASales.API.Context;
using AMS3ASales.API.Domain;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SQLitePCL;

namespace AMS3ASales.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly ApplicationDataContext _context;
        public ProductController(ApplicationDataContext context)
        {
            _context = context;
        }
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_context.Product.ToList()); 
        }

        [HttpGet("{id}")]
        public ActionResult GetById(Guid id) 
        {
            var product = _context.Product.FirstOrDefault(x => x.Id == id);
            if (product == null)
            { 
                return NotFound();
            }
            return Ok(product);
        }

        [HttpPost]
        public ActionResult Post(ProductRequest productRequest)
        {
            var product =  new Product(){
                Description = productRequest.Description,
                IsActive = true,
                ImageURL = productRequest.ImageURL
            };
            _context.Product.Add(product);
            _context.SaveChanges();

            return Ok();
        }
        [HttpPut]
        public ActionResult Update(Guid id, Product productRequest)
        {
            var product = _context.Product.Find(id);
            if (product == null) return NotFound();
            product.Description = productRequest.Description;
            product.ImageURL = productRequest.ImageURL;
            _context.SaveChanges();
            return Ok();
        }

        [HttpDelete]
        [Route("{id:guid}")]
        public ActionResult Delete(Guid id)
        {
            var product = _context.Product.Find(id);
            if (product == null) return NotFound();
            _context.Remove(product);
            _context.SaveChanges();
            return Ok();

        }
    }
}
