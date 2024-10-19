
// console.log($.fn.jquery);

if ($("#gameList button").length) {
  chrome.storage.local.get({
    ProgramAuto: false,
    ProgramAuto2: false,
    ProgramAuto3: false,
    ProgramAuto4: false
  }, items => {
    if (items.ProgramAuto || items.ProgramAuto2 || items.ProgramAuto3 || items.ProgramAuto4) {
      var myInterval = setInterval(() => {
        let target;
        if (items.ProgramAuto) {
          target = $("#gameList button")[0];
        } else if (items.ProgramAuto2) {
          target = $("#gameList button")[1];
        } else if (items.ProgramAuto3) {
          target = $("#gameList button")[2];
        } else if (items.ProgramAuto4) {
          target = $("#gameList button")[3];
        }

        if (target) {
          target.click();
        }
      }, 500);
    }
  });
}
