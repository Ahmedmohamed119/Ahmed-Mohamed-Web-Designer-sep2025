namespace WorkOrderWeb.Models
{
    public class WorkOrder
    {
        public int Id { get; set; }
        public string? WorkOrderNumber { get; set; }
        public string? Date { get; set; }
        public string? Department { get; set; }
        public string? Location { get; set; }
        public string? Requester { get; set; }
        public string? WorkType { get; set; }
        public string? JobDescription { get; set; }
        public string? Supervisor { get; set; }
        public string? Manager { get; set; }
        public string? Notes { get; set; }
    }
}