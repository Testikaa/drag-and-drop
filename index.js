const placeholders = document.getElementsByClassName('placeholder');
const items = document.getElementsByClassName('item');

for (const item of items){
    item.addEventListener('dragstart',dragstart)
    item.addEventListener('dragend', dragend)
}

function dragstart(e){
    e.target.classList.add('hold');
    setTimeout(()=> e.target.classList.add('hide'), 0)
}
function dragend(e){
    e.target.classList.remove('hide');
    e.target.classList.add('item')
}

for (const placeholder of placeholders){
    placeholder.addEventListener('dragover', dragdrop)
    placeholder.addEventListener('dragenter', dragEnter)
    placeholder.addEventListener('dragleave' ,dragleave)
    placeholder.addEventListener('drop', dragdrop)
}

function dragover(e){
    e.preventDefault()
}
function dragleave(e){
    e.target.classList.remove('hovered')
}
function dragdrop(e){
    for(let item of items){
        if(item.classList.contains('hold') && !e.target.hasChildNodes()){
            e.target.append(item)
            setTimeout(()=>item.classList.remove('hold'), 3000)
        }else{
        }
    }
}
function dragEnter(e){
    e.target.classList.add('hovered')

}