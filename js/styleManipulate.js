$(document).ready(function() {

    let country = navigator.language||navigator.browserLanguage;

    if (country === 'th') {

        //class
        $('html').addClass('font-th');

        //text
        $('title').text('Create passive income');
        $('h1.caption').text('เคยได้ยินคนที่มีรายได้ passive income 1,000 $ ต่อวันหรือไม่?');
        $('p.text').text('กรณีพิเศษ ความลับสุดยอดในการสร้างรายได้แบบ passive income');
        $('span.asterisk-text').text('กรอกข้อมูลที่จำเป็น');
        $('span.email-text').text('ที่อยู่อีเมล');

        //attribute
        $('input.email').attr({"placeholder":"กรอกอีเมล์ของคุณ"});
        $('input.button').attr({"value":"สมัครสมาชิก"});

    } else {

        //class
        $('html').addClass('font-en');

        //text
        $('title').text('Create passive income');
        $('h1.caption').text('Has anyone heard of a guy earning $1,000 on passive income a day?');
        $('p.text').text('Exclusive case firsthand. Top-5 secrets in generating passive income.');
        $('span.asterisk-text').text('required');
        $('span.email-text').text('Email Address');

        //attribute
        $('input.email').attr({"placeholder":"Enter your email"});
        $('input.button').attr({"value":"Subscribe"});

    }
});