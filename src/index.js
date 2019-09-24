/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
module.exports = function getTimeForEducation(
    focus = 'family', 
    knowsProgramming = true,
    config = {family: 4}
    ) {
      const TIME_IF_YOU_KNOW_PROGRAMMING = 800;
      const TIME_IF_YOU_NOT_KNOW_PROGRAMMING = 1300;
      let weeks = 0;
      if(knowsProgramming){
        weeks = TIME_IF_YOU_KNOW_PROGRAMMING / config[focus];
      } else {
        weeks = TIME_IF_YOU_NOT_KNOW_PROGRAMMING / config[focus];
      }
      return Math.ceil(weeks);
  };
  