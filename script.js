///.....................

//faka strieng........niyr push korlam
let IntervieCount = [];
let RejectedCount = [];
let currentStatusCount = 'all';

let total = document.getElementById("total");
let interview = document.getElementById("interview");
let rejected = document.getElementById("rejected");

const allcardParent = document.getElementById("all-card");
const mainContainer = document.querySelector('main');
const filterSectoin = document.getElementById('filtered-section');

const allfilterbtn = document.getElementById("all-filter-btn");
const interviebtn = document.getElementById("Interview-filter-btn");
const rejectedbtn = document.getElementById("Rejected-filter-btn");

const noJobs = document.getElementById('jobs-available');
const jobsCount = document.getElementById("Available-Jobs");

//button color change..........................
function toggleStyle(id){
////////////button color jonno 
    allfilterbtn.classList.remove('bg-[#3B82F6]','text-white');
    interviebtn.classList.remove('bg-[#3B82F6]','text-white');
    rejectedbtn.classList.remove('bg-[#3B82F6]','text-white');

    allfilterbtn.classList.add('bg-[#FFFFFF]','text-black');
    interviebtn.classList.add('bg-[#FFFFFF]','text-black');
    rejectedbtn.classList.add('bg-[#FFFFFF]','text-black');

    const selected = document.getElementById(id);
    currentStatusCount = id;

    selected.classList.remove('bg-[#FFFFFF]','text-black');
    selected.classList.add('bg-[#3B82F6]','text-white');
     //add button  hidden kaj kore
    if(id === 'all-filter-btn'){
        allcardParent.classList.remove('hidden');
        filterSectoin.classList.add('hidden');
        noJobs.classList.add('hidden');
    }

    else if(id === 'Interview-filter-btn'){
        allcardParent.classList.add('hidden');
        filterSectoin.classList.remove('hidden');
        renderInterview();
    }

    else if(id === 'Rejected-filter-btn'){
        allcardParent.classList.add('hidden');
        filterSectoin.classList.remove('hidden');
        renderrejected();
    }

    calculateCount();
}



///  8 of jobs.. ar count kaj korbe......
function calculateCount(){

    const totalJobs = allcardParent.children.length;

    total.innerText = totalJobs;
    interview.innerText = IntervieCount.length;
    rejected.innerText = RejectedCount.length;

    if(currentStatusCount === 'Interview-filter-btn'){
        jobsCount.innerText = `${IntervieCount.length} of ${totalJobs} jobs`;
    }
    else if(currentStatusCount === 'Rejected-filter-btn'){
        jobsCount.innerText = `${RejectedCount.length} of ${totalJobs} jobs`;
    }
    else{
        jobsCount.innerText = `${totalJobs} jobs`;
    }
}

calculateCount();

//................
mainContainer.addEventListener('click',function(event){

    // interview click  button ...add or cound kaj.........
    if(event.target.classList.contains('interview-btn')){

        const parentNode = event.target.closest('.job-card');

        const mobileShop =
            parentNode.querySelector('.mobile-shop, .Mobile-First-Corp').innerText;

        parentNode.querySelector('.Not-Applied-button, .Not-Applied')
            .innerText = 'interview';

        if(!IntervieCount.find(i=>i.mobileShop===mobileShop)){
            IntervieCount.push({mobileShop, notApplicate:'interview'});
        }

        RejectedCount = RejectedCount.filter(i=>i.mobileShop!==mobileShop);

        calculateCount();

        if(currentStatusCount==='Interview-filter-btn') renderInterview();
        if(currentStatusCount==='Rejected-filter-btn') renderrejected();
    }

    // rejected click button add ..or coutn kaj ..///
    else if(event.target.classList.contains('rejected-btn')){

        const parentNode = event.target.closest('.job-card');

        const mobileShop =
            parentNode.querySelector('.mobile-shop, .Mobile-First-Corp').innerText;

        parentNode.querySelector('.Not-Applied-button, .Not-Applied')
            .innerText = 'Rejected';

        if(!RejectedCount.find(i=>i.mobileShop===mobileShop)){
            RejectedCount.push({mobileShop, notApplicate:'Rejected'});
        }

        IntervieCount = IntervieCount.filter(i =>i.mobileShop!== mobileShop);

        calculateCount();

        if(currentStatusCount==='Interview-filter-btn') renderInterview();
        if(currentStatusCount==='Rejected-filter-btn') renderrejected();
    }
//....................................////
    // delete click   Interview....Rejected....all card  , delete ..////
    else if(event.target.closest('.delete-btn')){

        const card = event.target.closest('.job-card');

        if(card){

            const shopName =
                card.querySelector('.mobile-shop, .Mobile-First-Corp').innerText;

            card.remove();

            IntervieCount = IntervieCount.filter(i =>i.mobileShop !==shopName);
            RejectedCount = RejectedCount.filter(i =>i.mobileShop !==shopName);

            calculateCount();

            if(currentStatusCount==='Interview-filter-btn') renderInterview();
            else if(currentStatusCount==='Rejected-filter-btn') renderrejected();
        }
    }
});
//new div faka string... ai card push kore.....
function renderInterview(){

    filterSectoin.innerHTML='';

    if(IntervieCount.length===0){
        noJobs.classList.remove('hidden');
    }else{
        noJobs.classList.add('hidden');
    }

    for(let interview of IntervieCount){

        let div=document.createElement('div');
        div.className='mb-5 job-card flex justify-between border border-gray-300 rounded-sm shadow-lg bg-[#FFFFFF] md:gap-9 relative';

        div.innerHTML=`
        <p class="delete-btn absolute right-4 top-4 p-2 border border-slate-300 rounded-full hover:bg-red-500 duration-500 cursor-pointer hover:text-gray-50">
            <i class="fa-regular fa-trash-can"></i>
        </p>

        <div class="p-5 w-full">
            <h2 class="mobile-shop text-[#002C5C] text-[20px] font-semibold">${interview.mobileShop}</h2>
            <p class="native-Developer text-[#64748B]">React Native Developer</p>
            <p class="full-time py-4 text-[#64748B]">Remote . Full-time . $130,000 - $175,000</p>
            <button class="Not-Applied-button btn btn-active">${interview.notApplicate}</button>
            <p class="cross-platform py-3">
            Build cross-platform mobile applications using React Native.
            </p>
            <div class="flex gap-5">
                <button class="interview-btn btn btn-outline btn-success">interview</button>
                <button class="rejected-btn btn btn-outline btn-error">Rejected</button>
            </div>
        </div>
        `;

        filterSectoin.appendChild(div);
    }
}
//.........................//

///new div ..... push kore.....valo kore korte hobe.........
function renderrejected(){

    filterSectoin.innerHTML='';

    if(RejectedCount.length===0){
        noJobs.classList.remove('hidden');
    }else{
        noJobs.classList.add('hidden');
    }

    for(let rejected of RejectedCount){

        let div=document.createElement('div');
        div.className='mb-5 job-card flex justify-between border border-gray-300 rounded-sm shadow-lg bg-[#FFFFFF] md:gap-9 relative';
                     
        div.innerHTML=`
        <p class="delete-btn absolute right-4 top-4 p-2 border border-slate-300 rounded-full hover:bg-red-500 duration-500 cursor-pointer hover:text-gray-50">
            <i class="fa-regular fa-trash-can"></i>
        </p>

        <div class="p-5 w-full">
            <h2 class="mobile-shop text-[#002C5C] text-[20px] font-semibold">${rejected.mobileShop}</h2>
            <p class="native-Developer text-[#64748B]">React Native Developer</p>
            <p class="full-time py-4 text-[#64748B]">Remote . Full-time . $130,000 - $175,000</p>
            <button class="Not-Applied-button btn btn-active">${rejected.notApplicate}</button>
            <p class="cross-platform py-3">
            Build cross-platform mobile applications using React Native.
            </p>
            <div class="flex gap-5">
                <button class="interview-btn btn btn-outline btn-success">interview</button>
                <button class="rejected-btn btn btn-outline btn-error">Rejected</button>
            </div>
        </div>
        `;

        filterSectoin.appendChild(div);
    }
}
//......................................////

/// ata aber korte hobe,,,,,,,,,,//////programming hero