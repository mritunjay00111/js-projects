const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const steps = document.querySelectorAll(".progress-step");

let currentStep = 1;

function updateProgress() {
 steps.forEach((step,index)=>{
  console.log('index:',index);
  console.log('curstep:',currentStep);
  console.log('addcomp:',(currentStep*2)-1);
 if(index<((currentStep*2)-1)){
step.classList.add('complete');
 }else{
  step.classList.remove('complete');
 }
 })

 prevBtn.disabled = currentStep === 1;
 nextBtn.disabled = currentStep === 4;
}

function handleprev() {
 if(currentStep>1){
  currentStep--;
  updateProgress();
 }
}

function handlenext() {
  if(currentStep<4){
    currentStep++;
    updateProgress();
  }
}

prevBtn.addEventListener("click", handleprev);
nextBtn.addEventListener("click", handlenext);

// Initialize
updateProgress();
