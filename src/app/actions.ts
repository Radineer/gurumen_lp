'use server';

export async function handleSubmit(formData: FormData) {
  // TODO: フォーム送信処理の実装
  const name = formData.get('name');
  const email = formData.get('email');
  const subject = formData.get('subject');
  const message = formData.get('message');

  // ここでメール送信などの処理を実装
  console.log('Form submitted:', { name, email, subject, message });
} 