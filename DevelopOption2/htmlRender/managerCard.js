// create a function that holds the html that will out put the manager
function managerCard(data) {
  return `
    <div class="card employee-card">
    <div class="card-header">
        <h2 class="card-title">${data.name}</h2>
        <h3 class = "card-title"><i class ="fas fa-mug-hot mr-2"></i>${data.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class=list-group-item">ID: ${data.id}</li>
            <li class=list-group-item">Email: <a hrefwhatever>
            <li class=list-group-item">whatever: <>
    
    `;
}
// export managerCard
module.exports = managerCard;
