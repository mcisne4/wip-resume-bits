module default {
  type WorkExperience {
    required _modified_date: cal::local_datetime;

    required job_title: str {
      constraint min_len_value(2);
    }

    required company_name: str {
      constraint min_len_value(2);
    }

    required city: str {
      constraint min_len_value(2);
    }

    required state: str {
      constraint min_len_value(2);
      constraint max_len_value(2);
    }

    start_date: cal::local_date;
    end_date: cal::local_date;

    details: array<str>;
  }
}
