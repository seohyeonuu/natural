let newCompound = document.querySelector('#new-compound');
let addCompoundBtn = document.querySelector('#add-compound-btn');
let compoundList = document.querySelector('#compound-list');

addCompoundBtn.addEventListener('click', function() {
    // Create a new compound item
    let li = document.createElement('li');
    li.textContent = newCompound.value;

    let btn = document.createElement('button');
    btn.textContent = '[X]';
    btn.className = 'remove-btn';
    btn.addEventListener('click', function() {
        compoundList.removeChild(li);
    });
    li.appendChild(btn);
    // Append the new compound item to the list 
    compoundList.appendChild(li);
    newCompound.value = ''; // Clear the input field after adding
    newCompound.focus(); // Focus back on the input field 
});
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('add-primary-btn').addEventListener('click', addPrimary);
});

function addPrimary() {
    const input = document.getElementById('new-primary');
    const value = input.value.trim();
    if (value !== "") {
        const li = document.createElement('li');
        li.textContent = value;
        document.getElementById('primary-list').appendChild(li);
        input.value = "";  // 입력창 초기화
    } else {
        alert("단순명제를 입력해주세요.");
    }
}
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('add-symbolic-btn').addEventListener('click', addSymbolic);
});

function addSymbolic() {
    const symbolicInput = document.getElementById('new-symbolic');
    const ns1 = document.getElementById('ns1').value.trim();
    const ns2 = document.getElementById('ns2').value.trim();
    const ns3 = document.getElementById('ns3').value.trim();
    const rule = document.getElementById('natual-deduction-rule').value;

    const symbolicValue = symbolicInput.value.trim();

    if (symbolicValue === "") {
        alert("기호명제를 입력하세요.");
        return;
    }

    const li = document.createElement('li');
    li.innerHTML = `<strong>${symbolicValue}</strong> &nbsp; [${rule}] 
        <br><small>참조: ${[ns1, ns2, ns3].filter(Boolean).join(", ")}</small>`;
    document.getElementById('symbolic-list').appendChild(li);

    symbolicInput.value = "";
    document.getElementById('ns1').value = "";
    document.getElementById('ns2').value = "";
    document.getElementById('ns3').value = "";
}
