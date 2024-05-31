module default {
  type Person {
    required _modified_date: cal::local_datetime;

    required first_name: str {
      constraint min_len_value(1);
    }

    required last_name: str {
      constraint min_len_value(1);
    }

    middle_name: str {
      constraint min_len_value(1);
    }
  }
}
