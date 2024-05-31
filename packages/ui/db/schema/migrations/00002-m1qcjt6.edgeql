CREATE MIGRATION m1qcjt6nxm6wpkxtdtojgbsncjqcjtuqcx6fwpkkre2bc46o3ujpaa
    ONTO m15y2a3ktb7qvaylyu6lyvhudurqqbwgntvzx42x5asdxicbuzph7q
{
  CREATE TYPE default::Address {
      CREATE REQUIRED PROPERTY _modified_date: cal::local_datetime;
      CREATE REQUIRED PROPERTY city: std::str {
          CREATE CONSTRAINT std::min_len_value(2);
      };
      CREATE REQUIRED PROPERTY state: std::str {
          CREATE CONSTRAINT std::max_len_value(2);
          CREATE CONSTRAINT std::min_len_value(2);
      };
  };
  CREATE TYPE default::Contact {
      CREATE REQUIRED PROPERTY _modified_date: cal::local_datetime;
      CREATE REQUIRED PROPERTY contact: std::str {
          CREATE CONSTRAINT std::min_len_value(2);
      };
      CREATE REQUIRED PROPERTY contact_type: std::str {
          CREATE CONSTRAINT std::one_of('PhoneNumber', 'Email', 'Github', 'Gitlab', 'Facebook', 'LinkedIn', 'Twitter/X', 'Website');
      };
  };
  CREATE TYPE default::IndexedContact {
      CREATE REQUIRED LINK contact: default::Contact;
      CREATE REQUIRED PROPERTY idx: std::int64 {
          CREATE CONSTRAINT std::min_value(0);
      };
  };
  CREATE TYPE default::Education {
      CREATE REQUIRED PROPERTY _modified_date: cal::local_datetime;
      CREATE PROPERTY degree: std::str {
          CREATE CONSTRAINT std::min_len_value(2);
      };
      CREATE PROPERTY end_date: cal::local_date;
      CREATE PROPERTY field_of_study: std::str {
          CREATE CONSTRAINT std::min_len_value(2);
      };
      CREATE PROPERTY gpa: std::float32 {
          CREATE CONSTRAINT std::max_value(4.0);
          CREATE CONSTRAINT std::min_value(0.0);
      };
      CREATE REQUIRED PROPERTY school_name: std::str {
          CREATE CONSTRAINT std::min_len_value(2);
      };
      CREATE PROPERTY start_date: cal::local_date;
  };
  CREATE TYPE default::Language {
      CREATE REQUIRED PROPERTY _modified_date: cal::local_datetime;
      CREATE REQUIRED PROPERTY language: std::str {
          CREATE CONSTRAINT std::exclusive;
          CREATE CONSTRAINT std::min_len_value(2);
      };
  };
  CREATE TYPE default::IndexedLanguage {
      CREATE REQUIRED LINK language: default::Language;
      CREATE REQUIRED PROPERTY idx: std::int64 {
          CREATE CONSTRAINT std::min_value(0);
      };
  };
  CREATE TYPE default::Skill {
      CREATE REQUIRED PROPERTY _modified_date: cal::local_datetime;
      CREATE PROPERTY details: array<std::str>;
      CREATE REQUIRED PROPERTY skill: std::str {
          CREATE CONSTRAINT std::min_len_value(2);
      };
  };
  CREATE TYPE default::IndexedSkill {
      CREATE REQUIRED LINK skill: default::Skill;
      CREATE REQUIRED PROPERTY idx: std::int64 {
          CREATE CONSTRAINT std::min_value(0);
      };
  };
  CREATE TYPE default::JobTitle {
      CREATE REQUIRED PROPERTY _modified_date: cal::local_datetime;
      CREATE REQUIRED PROPERTY job_title: std::str {
          CREATE CONSTRAINT std::exclusive;
          CREATE CONSTRAINT std::min_len_value(2);
      };
  };
  CREATE TYPE default::Statement {
      CREATE REQUIRED PROPERTY _modified_date: cal::local_datetime;
      CREATE REQUIRED PROPERTY statement: std::str {
          CREATE CONSTRAINT std::min_len_value(2);
      };
  };
  CREATE TYPE default::WorkExperience {
      CREATE REQUIRED PROPERTY _modified_date: cal::local_datetime;
      CREATE REQUIRED PROPERTY city: std::str {
          CREATE CONSTRAINT std::min_len_value(2);
      };
      CREATE REQUIRED PROPERTY company_name: std::str {
          CREATE CONSTRAINT std::min_len_value(2);
      };
      CREATE PROPERTY details: array<std::str>;
      CREATE PROPERTY end_date: cal::local_date;
      CREATE REQUIRED PROPERTY job_title: std::str {
          CREATE CONSTRAINT std::min_len_value(2);
      };
      CREATE PROPERTY start_date: cal::local_date;
      CREATE REQUIRED PROPERTY state: std::str {
          CREATE CONSTRAINT std::max_len_value(2);
          CREATE CONSTRAINT std::min_len_value(2);
      };
  };
};
