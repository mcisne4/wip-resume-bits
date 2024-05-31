module default {
  type Contact {
    required _modified_date: cal::local_datetime;

    required contact_type: str {
      constraint one_of(
        "PhoneNumber",
        "Email",
        "Github",
        "Gitlab",
        "Facebook",
        "LinkedIn",
        "Twitter/X",
        "Website"
      );
    }

    required contact: str {
      constraint min_len_value(2);
    }
  }

  type IndexedContact {
    required contact: Contact;

    required idx: int64 {
      constraint min_value(0);
    }
  }
}
