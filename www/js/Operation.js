function Operation() {
  var tempCode = '';
  var flag = '';
  var result = '';
  var container = '';

  var vowel = {
    a: '',
    i: '',
    u: '',
    e: '',
    o: ''
  };

  var consonant = {
    b: '',
    c: '',
    d: '',
    D: '',
    f: '',
    g: '',
    h: '',
    j: '',
    k: '',
    l: '',
    m: '',
    n: '',
    N: '',
    p: '',
    q: '',
    r: '',
    s: '',
    t: '',
    T: '',
    Y: '',
    O: '',
    v: '',
    w: '',
    y: '',
    x: '',
    z: ''
  };

  // map engish to nepali
  var wordMap = {
    a: 'अ',
    aa: 'आ',
    i: 'इ',
    ii: 'ई',
    u: 'उ',
    uu: 'ऊ',
    e: 'ए',
    ai: 'ऐ',
    o: 'ओ',
    au: 'औ',
    k: 'क्',
    ka: 'क',
    kh: 'ख्',
    kha: 'ख',
    g: 'ग्',
    ga: 'ग',
    gh: 'घ्',
    gha: 'घ',
    Ng: 'ङ्',
    Nga: 'ङ',
    ch: 'च्',
    cha: 'च',
    chh: 'छ्',
    chha: 'छ',
    j: 'ज्',
    ja: 'ज',
    jh: 'झ्',
    jha: 'झ',
    Yn: 'ञ्',
    Yna: 'ञ',
    T: 'ट्',
    Ta: 'ट',
    Th: 'ठ्',
    Tha: 'ठ',
    D: 'ड्',
    Da: 'ड',
    Dh: 'ढ्',
    Dha: 'ढ',
    N: 'ण्',
    Na: 'ण',
    t: 'त्',
    ta: 'त',
    tha: 'थ',
    th: 'थ्',
    d: 'द्',
    da: 'द',
    dh: 'ध्',
    dha: 'ध',
    n: 'न्',
    na: 'न',
    p: 'प्',
    pa: 'प',
    ph: 'फ्',
    pha: 'फ',
    b: 'ब्',
    ba: 'ब',
    bh: 'भ्',
    bha: 'भ',
    m: 'म्',
    ma: 'म',
    y: 'य्',
    ya: 'य',
    r: 'र्',
    ra: 'र',
    rr: 'र्‍',
    l: 'ल्',
    la: 'ल',
    v: 'व्',
    va: 'व',
    sh: 'श्',
    sha: 'श',
    shh: 'ष्',
    shha: 'ष',
    s: 'स्',
    sa: 'स',
    h: 'ह्',
    ha: 'ह',
    c: 'क्',
    ca: 'क',
    f: 'फ्',
    fa: 'फ',
    q: 'क्',
    qa: 'क',
    w: 'व्',
    wa: 'व',
    x: 'छ्',
    xa: 'छ',
    z: 'ज्',
    za: 'ज',
    Om: 'ॐ',
    '0': '०',
    '1': '१',
    '2': '२',
    '3': '३',
    '4': '४',
    '5': '५',
    '6': '६',
    '7': '७',
    '8': '८',
    '9': '९',
    A: 'अ',
    Aa: 'आ',
    Ai: 'ऐ',
    Au: 'औ',
    B: 'ब्',
    Ba: 'ब',
    Bh: 'भ्',
    Bha: 'भ',
    C: 'क्',
    Ca: 'क',
    Ch: 'च्',
    Cha: 'च',
    Chh: 'छ्',
    Chha: 'छ',
    E: 'ए',
    F: 'फ्',
    Fa: 'फ',
    G: 'ग्',
    Ga: 'ग',
    Gh: 'घ्',
    Gha: 'घ',
    H: 'ह्',
    Ha: 'ह',
    I: 'इ',
    Ii: 'ई',
    J: 'ज्',
    Ja: 'ज',
    Jh: 'झ्',
    Jha: 'झ',
    K: 'क्',
    Ka: 'क',
    Kh: 'ख्',
    Kha: 'ख',
    L: 'ल्',
    La: 'ल',
    M: 'म्',
    Ma: 'म',
    P: 'प्',
    Pa: 'प',
    Ph: 'फ्',
    Pha: 'फ',
    Q: 'क्',
    Qa: 'क',
    R: 'ऋ्',
    R: 'र्',
    Ra: 'र',
    Rr: 'र्‍',
    S: 'स्',
    Sh: 'श्',
    Sha: 'श',
    Sa: 'स',
    Shh: 'ष्',
    Shha: 'ष',
    U: 'उ',
    Uu: 'ऊ',
    V: 'व्',
    Va: 'व',
    W: 'व्',
    Wa: 'व',
    X: 'छ्',
    Xa: 'छ',
    Z: 'ज्',
    Za: 'ज',
    Zha: 'झ'
  };

  // for letter construct
  var construct = {
    aa: 'ा',
    i: 'ि',
    ii: 'ी',
    u: 'ु',
    uu: 'ू',
    e: 'े',
    ai: 'ै',
    o: 'ो',
    au: 'ौ'
  };

  var characters = {
    '`': '',
    '~': '',
    '!': '',
    '@': '',
    '#': '',
    $: '',
    '%': '',
    '&': '',
    '(': '',
    ')': '',
    '-': '',
    _: '',
    '=': '',
    '+': '',
    '{': '',
    '}': '',
    '[': '',
    ']': '',
    '\\': '',
    '|': '',
    ';': '',
    ':': '',
    '"': '',
    "'": '',
    '<': '',
    '>': '',
    ',': '',
    '.': '',
    '?': '',
    '/': '',
    '*': '',
    '^': ''
  };

  var wordStruct = {
    a: (A = ['aa', 'ai', 'au', 'a']),
    A: (A1 = ['Aa', 'Ai', 'Au', 'A']),
    b: (B = ['bh', 'b', 'ba', 'bha']),
    B: (B1 = ['Bh', 'B', 'Ba', 'Bha']),
    c: (C = ['chh', 'ch', 'cha', 'c', 'ca', 'chha']),
    C: (C1 = ['Chh', 'Ch', 'Cha', 'C', 'Ca', 'Chha']),
    d: (D = ['d', 'da', 'dh', 'dha']),
    D: (D1 = ['D', 'Da', 'Dh', 'Dha']),
    e: (E = ['e']),
    E: (E1 = ['E']),
    f: (F = ['f', 'fa']),
    F: (F1 = ['F', 'Fa']),
    g: (G = ['gh', 'gha', 'g', 'ga']),
    G: (G1 = ['Gh', 'Gha', 'G', 'Ga']),
    h: (H = ['h', 'ha']),
    H: (H1 = ['H', 'Ha']),
    i: (I = ['ii', 'i']),
    I: (I1 = ['Ii', 'I']),
    j: (J = ['jh', 'jha', 'j', 'ja']),
    J: (J1 = ['Jh', 'Jha', 'J', 'Ja']),
    k: (K = ['kh', 'kha', 'k', 'ka']),
    K: (K1 = ['Kh', 'Kha', 'K', 'Ka']),
    l: (L = ['l', 'la']),
    L: (L1 = ['L', 'La']),
    m: (M = ['m', 'ma']),
    M: (M1 = ['M', 'Ma']),
    n: (N = ['n', 'na']),
    N: (N1 = ['N', 'Na', 'Ng', 'Nga']),
    o: (O = ['o']),
    O: (O1 = ['O']),
    p: (P = ['ph', 'pha', 'p', 'pa']),
    P: (P1 = ['Ph', 'Pha', 'P', 'Pa']),
    q: (Q = ['q', 'qa']),
    Q: (Q1 = ['q', 'qa']),
    r: (R = ['r', 'ra', 'rr']),
    R: (R1 = ['R', 'Ra', 'Rr']),
    s: (S = ['shh', 'shha', 'sh', 'sha', 's', 'sa']),
    S: (S1 = ['Shh', 'Shha', 'Sh', 'Sha', 'S', 'Sa']),
    t: (T = ['th', 'tha', 't', 'ta']),
    T: (T1 = ['T', 'Ta', 'Th', 'Tha']),
    u: (U = ['uu', 'u']),
    U: (U1 = ['Uu', 'U']),
    v: (V = ['v', 'va']),
    V: (V1 = ['V', 'Va']),
    w: (W = ['w', 'wa']),
    W: (W1 = ['W', 'Wa']),
    x: (X = ['x', 'xa']),
    X: (X1 = ['X', 'Xa']),
    y: (Y = ['y', 'ya']),
    Y: (Y1 = ['Y', 'Ya', 'Yn', 'Yna']),
    z: (Z = ['zh', 'z', 'za']),
    Z: (Z1 = ['zh', 'z', 'za']),
    0: (num0 = ['0']),
    1: (num1 = ['1']),
    2: (num2 = ['2']),
    3: (num3 = ['3']),
    4: (num4 = ['4']),
    5: (num5 = ['5']),
    6: (num6 = ['6']),
    7: (num7 = ['7']),
    8: (num8 = ['8']),
    9: (num9 = ['9'])
  };

  this.checkCharacter = function(val) {
    if (val in characters) {
      if (val == '*') {
        this.output('ँ');
      } else if (val == '^') {
        this.output('ं');
      } else if (val == '.') {
        this.output('|');
      } else {
        this.output(val);
      }
      return true;
    }
  };

  this.initialize = function(val) {
    container = wordStruct[val[val.length - 1]];
  };

  this.checkVowel = function(lastLetter, word) {
    if (tempCode[tempCode.length - 1] in vowel && lastLetter in consonant) {
      tempCode = '';
    }
    if (flag == true) {
      if (lastLetter in vowel) {
        tempCode = tempCode + lastLetter;
      }

      if (tempCode in construct && lastLetter in vowel) {
        this.modifyPostFormation(tempCode, word);
        this.output(construct[tempCode]);
        if (lastLetter in vowel && tempCode.length < 2) {
          flag = true;
        } else {
          flag = false;
          tempCode = '';
        }
        return true;
      }
    }
    if (lastLetter in consonant) {
      flag = true;
    }
    return false;
  };

  this.convert = function(word, lastLetter) {
    for (var i = 0; i < container.length; i++) {
      if (container[i] == word) {
        if (container[i] == 'aa' || container[i] == 'ii' || container[i] == 'uu') {
          result = result.substr(0, result.length - 1);
        } else this.modifyPreFormation(word);
        this.output(wordMap[word]);
        return;
      }
    }
    word = lastLetter;
    container = wordStruct[word];
    this.output(wordMap[word]);
    return word;
  };

  this.spacePressed = function() {
    tempCode = '';
    flag = false;

    var previousLetter = result.substr(result.length - 2, result.length);
    var flg = false;

    for (var key in wordMap) {
      if (wordMap[key] == previousLetter) {
        flg = true;
      }
    }
    if (flg) {
      result = result.substr(0, result.length - 1);
    }
    this.output('\u0020');
  };

  this.modifyPreFormation = function(val) {
    if (val.length < 2) return;
    result = result.substr(0, result.length - 2);
  };

  this.modifyPostFormation = function(tempCode, word) {
    if (word[word.length - 1] in vowel && word[word.length - 2] in consonant) {
      result = result.substr(0, result.length - 1);
    }

    if (
      (tempCode[tempCode.length - 1] == 'i' && word[word.length - 2] == 'i') ||
      (tempCode[tempCode.length - 1] == 'u' && word[word.length - 2] == 'u')
    ) {
      result = result.substr(0, result.length - 1);
    }
  };
  
  this.output = function(val) {
    result = result + val;
    document.getElementById('output').value = result;
  };

  this.resetflags = function() {
    container = '';
    result = '';
    word = '';
    tempCode = '';
    flag = '';
  };
}
