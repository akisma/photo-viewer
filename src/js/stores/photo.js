/*
Photo App

We'd like you to build a photo application centered on the JavaScript function shown below. How everything comes together from frameworks, to UX, to design, to storage is open ended and up to you to define, and you don't need to use all of the data returned by the function. The one thing we ask is that there is a grid view of the images. Additional views, aside from a grid view, are encouraged. This will serve as a basis for discussion. We're trying to understand how you code and how you think. You should not spend more than five hours on this. Please have it finished at least an hour before your interview.

getNextImages() : returns an array of images in the following format:

{
  id: String,
  title: String,
  imageURL: String,
  authorName: String,
  date: Number (timestamp in ms)
  likes: Number
}

Example usage:

getNextImages();
*/

define([], function(){
  return function getNextImages () {
    var OPERATORS = "come get give go keep let make put seem take be do have say see send may will about across after against among at before between by down from in off on over through to under up with as for of till than a the all any every no other some such that this I he you who and because but or if through while how when where why again ever far forward hear near now out still there then together well almost enough even little much not only quite so very tomorrow yesterday north south east west please yes".split(" ");
    var GENERAL = "account act addition adjustment advertisement agreement air amount amusement animal answer apparatus approval argument art attack attempt attention attraction authority back balance base behavior belief birth bit bite blood blow body brass bread breath brother building burn burst business butter canvas care cause chalk chance change cloth coal colour comfort committee company comparison competition condition connection control cook copper copy cork cotton cough country cover crack credit crime crush cry current curve damage danger daughter day death debt decision degree design desire destruction detail development digestion direction discovery discussion disease disgust distance distribution division doubt drink driving dust earth edge education effect end error event example exchange existence expansion experience expert fact fall family father fear feeling fiction field fight fire flame flight flower fold food force form friend front fruit glass gold government grain grass grip group growth guide harbor harmony hate hearing heat help history hole hope hour humour ice idea impulse increase industry ink insect instrument insurance interest invention iron jelly join journey judge jump kick kiss knowledge land language laugh law lead learning leather letter level lift light limit linen liquid list look loss love machine man manager mark market mass meal measure meat meeting memory metal middle milk mind mine minute mist money month morning mother motion mountain move music name nation need news night noise note number observation offer oil operation opinion order organization ornament owner page pain paint paper part paste payment peace person place plant play pleasure poison point polish porter position powder power price print process produce profit property prose protest pull punishment purpose push quality question rain range rate ray reaction reading reason record regret relation religion representative request respect rest reward rhythm rice river road roll room rub rule run salt sand scale science sea seat secretary selection self sense servant sex shade shake shame shock side sign silk silver sister size sky sleep slip slope smash smell smile smoke sneeze snow soap society son song sort sound soup space stage start statement steam steel step stitch stone stop story stretch structure substance sugar suggestion summer support surprise swim system talk taste tax teaching tendency test theory thing thought thunder time tin top touch trade transport trick trouble turn twist unit use value verse vessel view voice walk war wash waste water wave wax way weather week weight wind wine winter woman wood wool word work wound writing year".split(" ");
    var PICTURABLES = "angle ant apple arch arm army baby bag ball band basin basket bath bed bee bell berry bird blade board boat bone book boot bottle box boy brain brake branch brick bridge brush bucket bulb button cake camera card carriage cart cat chain cheese chest chin church circle clock cloud coat collar comb cord cow cup curtain cushion dog door drain drawer dress drop ear egg engine eye face farm feather finger fish flag floor fly foot fork fowl frame garden girl glove goat gun hair hammer hand hat head heart hook horn horse hospital house island jewel kettle key knee knife knot leaf leg library line lip lock map match monkey moon mouth muscle nail neck needle nerve net nose nut office orange oven parcel pen pencil picture pig pin pipe plane plate plough pocket pot potato prison pump rail rat receipt ring rod roof root sail school scissors screw seed sheep shelf ship shirt shoe skin skirt snake sock spade sponge spoon spring square stamp star station stem stick stocking stomach store street sun table tail thread throat thumb ticket toe tongue tooth town train tray tree trousers umbrella wall watch wheel whip whistle window wing wire worm".split(" ");
    var QUALITIES = "able acid angry automatic beautiful black boiling bright broken brown cheap chemical chief clean clear common complex conscious cup deep dependent early elastic electric equal fat fertile first fixed flat free frequent full general good great grey hanging happy hard healthy high hollow important kind like living long male married material medical military natural necessary new normal open parallel past physical political poor possible present private probable quick quiet ready red regular responsible right round same second separate serious sharp smooth sticky stiff straight strong sudden sweet tall thick tight tired true violent waiting warm wet wide wise yellow young".split(" ");
    function pick (coll) {
      return coll[Math.floor(Math.random() * coll.length)];
    }
    function cap (word) {
      return word[0].toUpperCase()+word.slice(1);
    }

    function guid() {
      function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
          .toString(16)
          .substring(1);
      }
      return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
    }
    
    var id = 1;
    function gen () {
      return {
        id: guid(),
        title: cap(pick(QUALITIES))+" "+pick(PICTURABLES)+(Math.random() < 0.4 ? "" : " "+pick(OPERATORS)+" "+pick(GENERAL)),
        imageURL: "https://source.unsplash.com/random",
        authorName: pick(GENERAL).slice(0, 2 + Math.floor(3*Math.random())) + pick(GENERAL).slice(-5 + Math.floor(5*Math.random())),
        date: Date.now() - Math.floor(2 * 60 * 60 * 1000 * Math.random()),
        likes: Math.floor(500 * Math.random() * Math.random())
      }
    }
    var images = [];
    for (var i=0; i<20; i++) images.push(gen());

    return images;
  }

  /* AS A STORE, IF WEBPACK/ETC WERE WORKING */
  // return {
  //   viewType: 'grid',
  //   photos: [],
  //   getPhotos: function(){
  //     this.photos = getNextImages();
  //   }
  // };
});