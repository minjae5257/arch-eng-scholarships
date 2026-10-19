const SCHOLARSHIPS = [
  {
    name: "국가장학금 Ⅰ유형 (학생직접지원형)",
    org: "한국장학재단",
    cat: "national",
    level: "학부",
    amount: "소득구간에 따른 등록금 지원 (학기별 공고)",
    who: "국내 대학 재학생 중 학자금 지원 9구간 이하, 성적 기준 충족자",
    tags: ["국가", "소득연계", "학부"],
    url: "https://www.kosaf.go.kr/ko/scholar.do?pg=scholarship05_12_01_01"
  },
  {
    name: "국가장학금 Ⅱ유형 (대학연계지원형)",
    org: "한국장학재단",
    cat: "national",
    level: "학부",
    amount: "대학 자체 기준에 따른 등록금 지원",
    who: "소속 대학이 Ⅱ유형에 참여하는 경우. 참여 여부는 대학 장학팀에 확인",
    tags: ["국가", "대학연계", "학부"],
    url: "https://www.kosaf.go.kr/ko/scholar.do?hmNavi=JH%2C00%2C00%2C00&pg=scholarship_main"
  },
  {
    name: "다자녀 국가장학금",
    org: "한국장학재단",
    cat: "national",
    level: "학부",
    amount: "다자녀 가구 대학생 등록금 지원 (공고 기준)",
    who: "다자녀 가구 소속 대학생. 세부 자격은 한국장학재단 공고 확인",
    tags: ["국가", "다자녀", "학부"],
    url: "https://www.kosaf.go.kr/ko/scholar.do?hmNavi=JH%2C00%2C00%2C00&pg=scholarship_main"
  },
  {
    name: "국가우수장학금 (이공계)",
    org: "한국장학재단",
    cat: "merit",
    level: "학부",
    amount: "우수 이공계 인재 대상 등록금·생활비 (선발 공고)",
    who: "이공계 학부생. 건축공학 등 공학 계열 해당 여부는 해당 연도 공고 확인",
    tags: ["이공계", "성적", "학부"],
    url: "https://www.kosaf.go.kr/ko/scholar.do?hmNavi=JH%2C00%2C00%2C00&pg=scholarship_main"
  },
  {
    name: "석사·박사 우수장학금 (이공계)",
    org: "한국장학재단",
    cat: "merit",
    level: "대학원",
    amount: "이공계 대학원 우수자 지원 (공고 기준)",
    who: "이공계 석·박사 과정생. 전공 해당 범위는 재단 안내 확인",
    tags: ["이공계", "대학원"],
    url: "https://www.kosaf.go.kr/ko/scholar.do?hmNavi=JH%2C00%2C00%2C00&pg=scholarship_main"
  },
  {
    name: "국가근로장학금",
    org: "한국장학재단",
    cat: "work",
    level: "학부",
    amount: "근로시간에 따른 시급 지급",
    who: "경제적 사정이 어려운 대학생. 교내·교외 근로 가능",
    tags: ["근로", "학부"],
    url: "https://www.kosaf.go.kr/ko/scholar.do?hmNavi=JH%2C00%2C00%2C00&pg=scholarship_main"
  },
  {
    name: "주거안정장학금",
    org: "한국장학재단",
    cat: "work",
    level: "학부",
    amount: "저소득층 대학생 주거비 지원 (공고 기준)",
    who: "주거비 부담이 있는 저소득층 대학생",
    tags: ["주거", "학부"],
    url: "https://www.kosaf.go.kr/ko/scholar.do?hmNavi=JH%2C00%2C00%2C00&pg=scholarship_main"
  },
  {
    name: "푸른등대 기부장학금",
    org: "한국장학재단",
    cat: "national",
    level: "학부",
    amount: "기부 재원 생활비·등록금 (유형별 상이)",
    who: "유형별 자격 상이. 저소득·특정 분야 등 공고 확인",
    tags: ["기부", "학부"],
    url: "https://www.kosaf.go.kr/ko/scholar.do?hmNavi=JH%2C00%2C00%2C00&pg=scholarship_main"
  },
  {
    name: "대한건축사협회 장학회",
    org: "대한건축사협회",
    cat: "arch",
    level: "학부",
    amount: "대학·지회별로 상이 (예: 생활비 정액)",
    who: "건축 관련 학과 재학생. 성적·경제 사정·지역 요건은 소속 대학 공고 확인",
    tags: ["건축", "교외", "학부"],
    url: "https://www.kira.or.kr/jsp/main/06/07.jsp"
  },
  {
    name: "대한건설협회 장학생",
    org: "대한건설협회",
    cat: "arch",
    level: "학부",
    amount: "협회·대학 공고에 따름",
    who: "건설 관련 학과 재학생 또는 건설 종사자 가족 등. 대학별 추천 요건 확인",
    tags: ["건설", "교외", "학부"],
    url: "https://www.cak.or.kr/"
  },
  {
    name: "대한건축학회 관련 장학·시상",
    org: "대한건축학회",
    cat: "arch",
    level: "학부·대학원",
    amount: "논문·설계·학술 시상 및 장학 공고에 따름",
    who: "건축·건축공학 전공 학생. 학회 공지와 대학 학과 안내 확인",
    tags: ["건축", "학술", "학부", "대학원"],
    url: "https://www.aik.or.kr/"
  },
  {
    name: "소속 대학 교내·교외 장학",
    org: "각 대학 장학팀",
    cat: "arch",
    level: "학부·대학원",
    amount: "대학·학과별 상이",
    who: "건축공학과 재학생. 학과 공지, 포털 장학 메뉴, 교외 추천 공고를 함께 확인",
    tags: ["대학", "학과"],
    url: "https://www.kosaf.go.kr/"
  }
];
