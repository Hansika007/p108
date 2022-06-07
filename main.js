function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/Zmckl_GfQ/model.json', modelReady);
}

function modelReady()
{
    classifier.classify(gotResults);
}

function gotResults(error , results)
{
    if(error)
    {
        console.error(error);
    }
    else
    {
        console.log(results);
        document.getElementById("result_label").innerHTML = 'I can hear - ' + results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy - ' + (results[0].confidence * 100).toFixed(2)+"%";
        
        random_r = Math.floor(Math.random() * 255 )+1;
        random_g = Math.floor(Math.random() * 255 )+1;
        random_b = Math.floor(Math.random() * 255 )+1;

        document.getElementById("result_label").style.color = "rgb("+random_r+" , "+random_g+" , "+random_b+")";
        document.getElementById("result_confidence").style.color = "rgb("+random_r+" , "+random_g+" , "+random_b+")";
    }

    img1 = document.getElementById("dog");
    img2 = document.getElementById("cat");
    img3 = document.getElementById("ear");

    if (results[0].label == "Barking") 
    { 
        
        img1.src = 'https://media.newyorker.com/photos/602d316d2e74ac1a159da05f/2:1/w_2560,h_1280,c_limit/Heyward-Jack-edit.jpg'; 
        
    } 
    else if (results[0].label == "Meowing")
    {
        img2.src = 'https://www.nawpic.com/media/2020/cute-cat-nawpic-12.jpg'; 
    } 
    else
    { 
        img3.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThpweWv8ksG48PGyuOqMw2YuSRkXoUvjWjtA&usqp=CAU'; 
    } 
}