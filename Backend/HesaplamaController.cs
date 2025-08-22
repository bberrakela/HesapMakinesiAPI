using HesapMakinesiApi.Data;
using HesapMakinesiApi.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace HesapMakinesiApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class HesaplamaController : ControllerBase
    {
        private readonly AppDbContext _context;

        public HesaplamaController(AppDbContext context)
        {
            _context = context;
        }

        [HttpPost("hesapla")]
        public async Task<ActionResult<double>> Hesapla([FromBody] HesaplamaRequest request)
        {
            try
            {
                double sonuc = 0;

                switch (request.Islem.ToLower())
                {
                    case "+":
                    case "toplama":
                        sonuc = request.Sayi1 + request.Sayi2;
                        break;
                    case "-":
                    case "cikarma":
                        sonuc = request.Sayi1 - request.Sayi2;
                        break;
                    case "*":
                    case "carpma":
                        sonuc = request.Sayi1 * request.Sayi2;
                        break;
                    case "/":
                    case "bolme":
                        if (request.Sayi2 == 0)
                            return BadRequest("Sıfıra bölme yapılamaz!");
                        sonuc = request.Sayi1 / request.Sayi2;
                        break;
                    default:
                        return BadRequest("Geçersiz işlem! Kullanılabilir işlemler: +, -, *, /");
                }

                var gecmis = new IslemGecmisi
                {
                    Sayi1 = request.Sayi1,
                    Sayi2 = request.Sayi2,
                    Islem = request.Islem,
                    Sonuc = sonuc,
                    Tarih = DateTime.Now
                };

                _context.IslemGecmisi.Add(gecmis);
                await _context.SaveChangesAsync();

                return Ok(sonuc);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Bir hata oluştu: {ex.Message}");
            }
        }

        [HttpGet("gecmis")]
        public async Task<ActionResult<List<IslemGecmisi>>> GetGecmis()
        {
            try
            {
                var gecmis = await _context.IslemGecmisi
                    .OrderByDescending(x => x.Tarih)
                    .Take(50)
                    .ToListAsync();

                return Ok(gecmis);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Bir hata oluştu: {ex.Message}");
            }
        }

        [HttpDelete("gecmis")]
        public async Task<ActionResult> ClearGecmis()
        {
            try
            {
                var tumGecmis = await _context.IslemGecmisi.ToListAsync();
                _context.IslemGecmisi.RemoveRange(tumGecmis);
                await _context.SaveChangesAsync();

                return Ok("İşlem geçmişi temizlendi.");
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Bir hata oluştu: {ex.Message}");
            }
        }
    }

    public class HesaplamaRequest
    {
        public double Sayi1 { get; set; }
        public double Sayi2 { get; set; }
        public string Islem { get; set; } = null!;
    }
}
