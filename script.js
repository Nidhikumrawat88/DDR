function calculateDRR() {
    // Get input values
    const startDate = new Date(document.getElementById('startDate').value);
    const endDate = new Date(document.getElementById('endDate').value);
    const excludedDates = document.getElementById('excludedDates').value.split(',').map(date => new Date(date.trim()));
    const leadCount = parseInt(document.getElementById('leadCount').value);
  
    // Calculate the total number of days between start and end date
    const totalDays = Math.floor((endDate - startDate) / (1000 * 60 * 60 * 24)) + 1;
  
    // Subtract days for excluded dates
    for (const excludedDate of excludedDates) {
      if (excludedDate >= startDate && excludedDate <= endDate) {
        totalDays--;
      }
    }
  
    // Calculate DRR for the target date (leadCount days from the end date)
    const targetDate = new Date(endDate);
    targetDate.setDate(targetDate.getDate() + leadCount);
    const drr = Math.max(0, Math.floor((targetDate - new Date()) / (1000 * 60 * 60 * 24)));
  
    // Get Month and Year of the start date
    const startMonth = startDate.getMonth() + 1;
    const startYear = startDate.getFullYear();
  
    // Display the result
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `Start Month: ${startMonth}, Start Year: ${startYear}, Total Days: ${totalDays}, Expected DRR: ${drr} days`;
  }
  