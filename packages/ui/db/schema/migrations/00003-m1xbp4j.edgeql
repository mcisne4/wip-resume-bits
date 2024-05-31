CREATE MIGRATION m1xbp4jt6kiw5qtgvrskmowwbxpwlm6nirzrzzq5kaiqwu45ksmcza
    ONTO m1qcjt6nxm6wpkxtdtojgbsncjqcjtuqcx6fwpkkre2bc46o3ujpaa
{
  CREATE TYPE default::Resume {
      CREATE LINK address: default::Address;
      CREATE MULTI LINK contacts: default::IndexedContact;
      CREATE MULTI LINK education: default::Education;
      CREATE LINK job_title: default::JobTitle;
      CREATE MULTI LINK languages: default::IndexedLanguage;
      CREATE REQUIRED LINK person: default::Person;
      CREATE MULTI LINK skills: default::IndexedSkill;
      CREATE LINK statement: default::Statement;
      CREATE MULTI LINK work_experiences: default::WorkExperience;
      CREATE REQUIRED PROPERTY _modified_date: cal::local_datetime;
      CREATE REQUIRED PROPERTY alias: std::str {
          CREATE CONSTRAINT std::exclusive;
          CREATE CONSTRAINT std::min_len_value(2);
      };
  };
};
