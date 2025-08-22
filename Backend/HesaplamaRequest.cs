using System.ComponentModel.DataAnnotations;

namespace HesapMakinesiApi.Models
{
    public class HesaplamaRequest
    {
        public double Sayi1 { get; set; }
        public double Sayi2 { get; set; }
        public string Islem { get; set; } = null!;
    }
}
