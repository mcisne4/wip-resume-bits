module default {
  type Resume {
    required _modified_date: cal::local_datetime;

    required alias: str {
      constraint min_len_value(2);
      constraint exclusive;
    }

    required person: Person;
    job_title: JobTitle;

    address: Address;
    multi contacts: IndexedContact;
    statement: Statement;

    multi work_experiences: WorkExperience;
    multi education: Education;

    multi skills: IndexedSkill;
    multi languages: IndexedLanguage;
  }
}
