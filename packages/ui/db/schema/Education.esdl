module default {
  type Education {
    required _modified_date: cal::local_datetime;

    required school_name: str {
      constraint min_len_value(2);
    }

    degree: str {
      constraint min_len_value(2);
    }

    field_of_study: str {
      constraint min_len_value(2);
    }

    gpa: float32 {
      constraint min_value(0.0);
      constraint max_value(4.0);
    }

    start_date: cal::local_date;
    end_date: cal::local_date;
  }
}
