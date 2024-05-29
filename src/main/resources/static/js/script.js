// adding percent functions to the inital rows
var row1 = document.getElementById('row1');
inputPercent(row1);

// track number of rows of added
var tracker = 1; 

// row button
var addRowButton = document.querySelector('input[value="addrow"]');
addRowButton.addEventListener('click', function(evt){
    evt.preventDefault();
    addrow();
});

//mean button
var meanButton = document.querySelector('input[value="MEAN"]');
meanButton.addEventListener('click', function(evt){
    evt.preventDefault();
    getMean();
});

// weighted button
var weightButton = document.querySelector('input[value="WEIGHTED"]');
weightButton.addEventListener('click', function(evt){
    evt.preventDefault();
    getWeight();
});

// adds the pregecntage to the rows 
function inputPercent(row) {
    const grade1 = row.querySelector('.grade1');
    const grade2 = row.querySelector('.grade2');

    grade1.addEventListener('input', updatePercentage);
    grade2.addEventListener('input', updatePercentage);
}


// percetnage calcualtor 
function updatePercentage(evt) {
    const input = evt.target; 
    const row = input.closest('tr'); 
    const grade1in = row.querySelector('.grade1');
    const grade2in = row.querySelector('.grade2');
    const percentageGrade = row.querySelector('.percentage');

    const grade1 = parseFloat(grade1in.value);
    const grade2 = parseFloat(grade2in.value);

    // to avoid error grade 2 has to be greater than 0
    if (grade2 > 0) {
        const percentage = (grade1/grade2)*100;
        percentageGrade.textContent = `${percentage.toFixed(2)}%`;
    } else {
        percentageGrade.textContent = '0%';
    }
}

// add row function
function addrow() {   
    tracker++;
    const table = document.getElementById('table');
    const newRow = document.createElement('tr');
    newRow.innerHTML = 
        `<th>Activity ${tracker} </th><th>A${tracker} 
        </th><th><input name="weight" type="text" class="weight"></th>
        <th><input name="grade1" type="text" class="grade1"> / 
        <input name="grade2" type="text" class="grade2"></th><th class="percentage"></th>`;
    table.appendChild(newRow);
    inputPercent(newRow);
    // inputWeight(newRow);
}

// mean function for mena button
function getMean(){
    let gr1 = document.getElementsByName('grade1');
    let gr2 = document.getElementsByName('grade2');

    const total = gr1.length;
    const result = document.querySelector('#res');
    var percentage = 0;
    
    for(let i=0; i<total; i++){
        if(gr2[i].value !== 0){
            percentage+= (gr1[i].value/gr2[i].value);
        }
    }
    if(percentage > 0){
        const mean = (percentage/total)*100;
        result.textContent = `${mean.toFixed(1)}%`;
    } else {
        result.textContent = 'inavlid input';
    }
    
}

// weight function for wieght button
function getWeight() {
    let gr1 = document.getElementsByName('grade1');
    let gr2 = document.getElementsByName('grade2');
    let weightIn = document.getElementsByName('weight');
    
    const total = gr1.length;
    const result = document.querySelector('#res');
    var percentage = 0;
    var sumWeights = 0;

    for(let i=0; i<total; i++) {
        var grade1Value = parseFloat(gr1[i].value);
        var grade2Value = parseFloat(gr2[i].value);
        var weightValue = parseFloat(weightIn[i].value);
        
        if (grade2Value!==0){
            percentage+= (grade1Value/grade2Value)*weightValue;
            sumWeights+= weightValue;
        }
    }
    
    if (sumWeights > 0) {
        const weighted = (percentage/sumWeights)*100;
        result.textContent = `${weighted.toFixed(1)}%`;
    } else {
        result.textContent = 'invalid input.';
    }
}