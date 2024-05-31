module default {
  type Address {
    required _modified_date: cal::local_datetime;

    required city: str {
      constraint min_len_value(2);
    }

    required state: str {
      constraint min_len_value(2);
      constraint max_len_value(2);
    }
  }
}
