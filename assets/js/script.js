/* date count */
function DateCount() {
  var $placeForDate = $(".count-date"),
      toDate = new Date(new Date().getTime() + 24 * 60 * 60 * 1000 * 7),
      day = toDate.getDate(),
      month = getNameMonth(toDate.getMonth());

  $placeForDate.each(function(){
    $(this).find('.dd').text(day);
    $(this).find('.MMM').text(month);
  });

  function getNameMonth(month) {
    var nameMonth = "ianuarie";

    switch(month) {
      case 0:
      default:
        break;
      case 1:
        nameMonth = "februarie";
        break;
      case 2:
        nameMonth = "martie";
        break;
      case 3:
        nameMonth = "aprilie";
        break;
      case 4:
        nameMonth = "mai";
        break;
      case 5:
        nameMonth = "iunie";
        break;
      case 6:
        nameMonth = "iulie";
        break;
      case 7:
        nameMonth = "august";
        break;
      case 8:
        nameMonth = "septembrie";
        break;
      case 9:
        nameMonth = "octombrie";
        break;
      case 10:
        nameMonth = "noiembrie";
        break;
      case 11:
        nameMonth = "decembrie";
        break;
    }

    return nameMonth;
  }
}
DateCount();