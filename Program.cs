using Microsoft.EntityFrameworkCore;
using WorkOrderWeb.Data; // لازم السطر ده يكون موجود عشان يشوف فولدر الـ Data

var builder = WebApplication.CreateBuilder(args);

// 1. إضافة خدمات الـ MVC (Controllers & Views)
builder.Services.AddControllersWithViews();

// 2. إضافة خدمة قاعدة البيانات (السطر اللي سألت عليه - الخطوة رقم 6)
// السطر ده بيعرف الموقع على كلاس الـ AppDbContext اللي عملناه
builder.Services.AddDbContext<AppDbContext>();

var app = builder.Build();

// 3. إعدادات تشغيل الموقع (Middleware)
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();

// 4. تحديد الصفحة اللي هتفتح أول ما تشغل البرنامج (الـ Route)
app.MapControllerRoute(
    name: "default",
    pattern: "{controller=WorkOrder}/{action=Create}/{id?}");

app.Run();