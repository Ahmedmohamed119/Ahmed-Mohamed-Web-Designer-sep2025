using Microsoft.AspNetCore.Mvc;
using WorkOrderWeb.Models;
using WorkOrderWeb.Data;
using System.Threading.Tasks;

namespace WorkOrderWeb.Controllers
{
    public class WorkOrderController : Controller
    {
        private readonly AppDbContext _context;

        // ربط الكنترولر بقاعدة البيانات
        public WorkOrderController(AppDbContext context)
        {
            _context = context;
        }

        // دالة لعرض صفحة الـ Create.cshtml
        public IActionResult Create()
        {
            return View();
        }

        // دالة لحفظ البيانات في قاعدة البيانات عند الضغط على حفظ
        [HttpPost]
        public async Task<IActionResult> Create([FromBody] WorkOrder workOrder)
        {
            if (ModelState.IsValid)
            {
                // حفظ البيانات في جدول الـ WorkOrders
                _context.WorkOrders.Add(workOrder);
                await _context.SaveChangesAsync();

                return Ok(new { success = true, message = "تم الحفظ في قاعدة البيانات بنجاح" });
            }

            return BadRequest(new { success = false, message = "بيانات غير صالحة" });
        }
    }
}