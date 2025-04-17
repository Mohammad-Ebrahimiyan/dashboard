import { z } from "zod";

export const schema = z.object({
  fullName: z
    .string()
    .min(6, { message: "نام و نام خانوادگی باید حداقل 6 کاراکتر باشد." }),
  phone: z
    .string()
    .length(11, { message: "شماره تماس باید 11 رقم باشد." })
    .regex(/^\d{11}$/, { message: "فقط اعداد مجازند." }),
  gender: z.string().min(1, { message: "جنسیت الزامی است." }),
  nationalCode: z
    .string()
    .length(10, { message: "کد ملی باید دقیقاً 10 رقم باشد." })
    .regex(/^\d{10}$/, { message: "فقط اعداد مجازند." }),
  email: z.string().email({ message: "ایمیل معتبر نیست." }),
});
