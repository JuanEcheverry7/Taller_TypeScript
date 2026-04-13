import { Serie } from './serie.js';
import { series } from './data.js';
let seriesTbody = document.getElementById('series-tbody');
const averageSeasonsEl = document.getElementById('average-seasons');
const detailEl = document.getElementById('serie-detail');
function renderSeriesInTable(series) {
    console.log('Desplegando series');
    series.forEach((serie) => {
        let trElement = document.createElement("tr");
        trElement.style.cursor = 'pointer';
        trElement.innerHTML = `<td><b>${serie.id}</b></td>
                           <td>${serie.name}</td>
                           <td>${serie.channel}</td>
                           <td>${serie.seasons}</td>`;
        trElement.addEventListener('click', () => renderSerieDetail(serie));
        seriesTbody.appendChild(trElement);
    });
}
function renderSerieDetail(serie) {
    detailEl.innerHTML = `
    <div class="card">
      <img src="${serie.poster}" class="card-img-top" alt="${serie.name}">
      <div class="card-body">
        <h5 class="card-title">${serie.name}</h5>
        <p class="card-text">${serie.description}</p>
        <a href="${serie.webpage}" target="_blank" class="btn btn-primary">Website</a>
      </div>
    </div>
  `;
}
function getAverageSeasons(series) {
    let totalSeasons = 0;
    series.forEach((serie) => totalSeasons = totalSeasons + serie.seasons);
    return totalSeasons / series.length;
}
renderSeriesInTable(series);
averageSeasonsEl.innerHTML = `Seasons average: ${getAverageSeasons(series)}`;
//# sourceMappingURL=main.js.map