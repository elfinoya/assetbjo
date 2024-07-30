<script type="text/javascript">
var blink_speed = 1000; // every 1000 == 1 second, adjust to suit
var t = setInterval(function () {
    var ele = document.getElementById('blinking');
    ele.style.visibility = (ele.style.visibility == 'hidden' ? '' : 'hidden');
}, blink_speed);
</script>
