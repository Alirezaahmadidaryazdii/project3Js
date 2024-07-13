
const imgHeader = document.querySelector('#img-header');

if(window.innerWidth <= 450){
    imgHeader.src = '../public/img/download (1).svg'
    imgHeader.style.width = "150px"
}

// part5 body

const part5 = document.querySelector('.part5');

const data = [
    {id: 1, title: 'Release date', icon: 'fa-solid fa-table', description: 'October 5, 2017', active: false},
    {id: 2, title: 'No. of players', icon: 'fa-solid fa-users', description: 'Single System(1)', active: true},
    {id: 3, title: 'Genre', icon: 'fa-regular fa-square-plus', description: 'Role playing', active: true},
    {id: 4, title: 'Publisher', icon: 'fa-solid fa-building', description: 'ConcernedApe', active: true},
    {id: 5, title: 'ESRB rating', icon: 'fa-solid fa-gear', description: 'Everyone10', active: true},
    {id: 6, title: 'Supported play modes', icon: 'fa-solid fa-gamepad', description: 'TV mode, Tabletop mode, Handheld mode', active: false},
    {id: 7, title: 'Game file size', icon: 'fa-solid fa-coins', description: '1.5 GB', active: false},
    {id: 8, title: 'Supported languages', icon: 'fa-solid fa-globe', description: 'English, French, German, Italian, Japanese, Korean, Portuguese, Russian, Simplified Chinese, Spanish, Traditional Chinese', active: false},
]

data.forEach(item=>{
    let txtElementPart5Body = `
        <div class="d-flex cards-part5 mt-3">
          <i class="${item.icon}" id="icon-part5"></i>
            <div class="d-flex flex-column flex-md-row">
                <h5 class="head-part5">${item.title}</h5>
                <p id="p-part5" class='${item.active == false ? 'text-muted' : 'para-part5'}'>${item.description}</p>
            </div>        
        </div>
    `
    part5.insertAdjacentHTML('beforeend', txtElementPart5Body)
});
//  icon heart
// part5.parentElement
let dataStorageHeart = []
document.body.addEventListener('click', e=>{

    let heartClass = e.target.getAttribute('class')
    // if class check the include the fa-heart so change fa-solid in fa-regular 
    if (heartClass.includes('fa-regular') && heartClass.includes('fa-heart')) {

        e.target.classList.remove('fa-regular')
        e.target.classList.add('fa-solid')
        console.log('bye')
        let currentData = {id: e.target.id, classElement: 'fa-solid'}

        if(dataStorageHeart.length = 0){
            dataStorageHeart.push(currentData);
            localStorage.setItem('heat', dataStorageHeart)
        }else{
            dataStorageHeart.forEach((item, index)=>{
                if(item.id == currentData.id){
                    dataStorageHeart[index].classElement = currentData.classElement
                    localStorage.setItem('heat', JSON.stringify(dataStorageHeart));
                }else{
                    dataStorageHeart.push(currentData);
                    localStorage.setItem('heat', JSON.stringify(dataStorageHeart));
                }
            })
        }
    } else if(heartClass.includes('fa-solid') && heartClass.includes('fa-heart')) {

        e.target.classList.remove('fa-solid')
        e.target.classList.add('fa-regular')

        console.log('hello')
        let currentData = {id: e.target.id, classElement: 'fa-regular'}
        
        if(dataStorageHeart.length == 0){
            dataStorageHeart.push(currentData);
            localStorage.setItem('heat', dataStorageHeart)
        }else{
            dataStorageHeart.forEach((item, index)=>{
                if(item.id == currentData.id){
                    dataStorageHeart[index].classElement = currentData.classElement
                    localStorage.setItem('heat', JSON.stringify(dataStorageHeart));
                }else{
                    dataStorageHeart.push(currentData);
                    localStorage.setItem('heat', JSON.stringify(dataStorageHeart));
                }
            })
        }
    }
})

window.addEventListener('load', () => {
    if(localStorage.getItem('heat') !== null){
        let dataStorage = JSON.parse(localStorage.getItem('like'));
        dataStorage.forEach((item)=>{
            Array.from(document.querySelectorAll('.fa-heart')).forEach((i) => {
                // console.log(i.id, item.id)
                if(Number(item.id) == Number(i.id)){
                    i.classList.remove('fa-regular');
                    i.classList.add(item.classElement)
                }
            });
        })
    }
});
